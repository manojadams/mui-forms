import { FormFieldRenderer, IField } from "@manojadams/metaforms-core";
import React, { useEffect, useState } from "react";

export default function Section(props: any) {
    const form2 = props.form[props.section.name?props.section.name:'default'];
    const [cField, setcField] = useState(form2);
    useEffect(() => {

    },[props.error]);
    const sync = () => {
        if (props.section.meta && props.section.meta.type === 'section') {
            setcField({...form2});
        }
    };
    return (
        <div className={props.activeIndex===props.index?'tab-pane active':'tab-pane'} id={props.section.name} role="tabpanel" aria-labelledby="contact-tab">
            <div className="row">
            {
                props.section.fields && props.section.fields.map((field: IField) => <FormFieldRenderer {...field} key={field.name} section={props.section.name} sync={sync} form={cField[field.name]}/>)
            }
            </div>
        </div>
    )
}