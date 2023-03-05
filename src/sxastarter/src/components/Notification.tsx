import React from 'react';
import {
  Field,
  LinkField,
  RichText,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Header: Field<string>;
  Message: Field<string>;
  CTA: LinkField;
}

type NotificationProps = {
  params: { [key: string]: string };
  fields: Fields;
};

/**
 * Notification Widget component that displays a header, message, and CTA link.
 * @param props The props object that contains the component parameters and field data.
 * @returns A JSX element that represents the Notification Widget component.
 */
export const Notification = (props: NotificationProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const { Header, Message, CTA } = props.fields;

  const { fields } = props;

  // Access the URL of the LinkField object using the `href` and `value` property
  const url = fields.CTA?.value?.href;
  const value = fields.CTA?.value?.text;

  // Determine whether the Notification should be displayed based on its visibility settings.
  const isVisible =
    sitecoreContext?.pageState === 'normal' &&
    props.params.Visibility?.toLowerCase() === 'visible';

  // Generate the CTA link element if the field data is available.
  const CtaLink = () => (CTA?.value && url ? <a href={url}>{value}</a> : <></>);

  // Generate the Notification header element if the field data is available.
  const HeaderElement = () =>
    Header?.value ? (
      <h3>
        <RichText className='header' field={Header} />
      </h3>
    ) : (
      <></>
    );

  // Generate the Notification message element if the field data is available.
  const MessageElement = () =>
    Message?.value ? (
      <p>
        <RichText className='message' field={Message} />
      </p>
    ) : (
      <></>
    );

  return (
    <>
      {isVisible && (
        <div className={`component notification ${props.params.styles}`}>
          <div className='component-content'>
            <HeaderElement />
            <MessageElement />
            {CTA && <CtaLink />}
          </div>
        </div>
      )}
    </>
  );
};

// Export the NotificationDefault and Notification components for use in other modules.
export default Notification;
