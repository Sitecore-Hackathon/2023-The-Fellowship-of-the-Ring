import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';

type PopUpProps = {
  fields: {
    Header: Field<string>,
    Content: Field<string>  
  };
}

const PopUp = (props: PopUpProps): JSX.Element => (
	
  <div>
    Pop Up
	<Text field={props.fields.Header} />
  </div>
);

export default PopUp;