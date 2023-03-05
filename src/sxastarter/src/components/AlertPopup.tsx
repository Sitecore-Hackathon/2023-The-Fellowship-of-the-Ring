import React from 'react';
import {
  Text,
  useSitecoreContext,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';

// Define the interface for the fields that will be passed as props
interface Fields {
  AlertTitle: Field<string>;
  AlertContent: Field<string>;
  AlertDismiss: Field<string>;
}

// Define the props for the component
type AlertPopupProps = {
  params: { [key: string]: string };
  fields: Fields;
};

// Define the AlertPopup component
export const AlertPopup = (props: AlertPopupProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  // If there are fields passed as props, render the AlertPopup component
  if (props.fields) {
    const id = props.params.RenderingIdentifier;

    return (
      <div
        className={`component alert-popup ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className='component-content'>
          <div className='alert-header'>
            <Text
              tag='h2'
              className='alert-title'
              field={props.fields.AlertTitle}
            />
            {/* Render the close button only if the page is being edited */}
            {sitecoreContext.pageEditing && (
              <button
                className='close-button'
                onClick={() => alert('Close button clicked')}
              >
                X
              </button>
            )}
          </div>
          <Text
            tag='p'
            className='alert-content'
            field={props.fields.AlertContent}
          />
          <button className='dismiss-button'>
            <>{props.fields.AlertDismiss}</>
          </button>
        </div>
      </div>
    );
  }

  // If there are no fields passed as props, render a default empty state
  return (
    <div className={`component alert-popup ${props.params.styles}`.trimEnd()}>
      <div className='component-content'>
        <span className='is-empty-hint'>Alert Popup</span>
      </div>
    </div>
  );
};
