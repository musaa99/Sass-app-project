import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={field.name} className=''>{label}</label>
			<input
				className={`form-control shadow-none ${
					meta.touched && meta.error && "is-invalid"
				}`}
				{...field}
				{...props}
				autoComplete="off"
			/>
			<ErrorMessage
				component="div"
				name={field.name}
				className='absolute text-[red] '
				style={{ width: "350px", marginTop: "-20px" }}
			/>
		</>
	);
};

// const MySelect = ({ label, ...props }) => {
//         const [field, meta] = useField(props);
//         return (
//             <React.Fragment>
//                 <label htmlFor={props.id || props.name}>{label}</label>
//                 <select name={props.name} {...field} {...props}>
//                     {props.children}
//                 </select>
//                 {meta.touched && meta.error && (<p>{meta.error}</p>)}
//             </React.Fragment>
//         );
//     }
