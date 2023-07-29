class SchemaUtil {
    static jsonToSchema(jsonData: string) {
        const json = JSON.parse(jsonData);
        const allKeys = Object.keys(json);
        const fields = [];
        allKeys.forEach((key) => {
            const meta = new Meta({
                displayName: key,
                displayType: "text_field",
                value: allKeys[key] as string
            });
            const field = new Field(key, meta);
            fields.push(field);
        });
        const buttons = [
            {
                name: "previous",
                meta: {
                    displayName: "Previous",
                    type: "previous"
                }
            }
        ];
        const schema = {
            fields,
            buttons
        };
        return schema;
    }
}

interface IMeta {
    displayName: string;
    displayType: string;
    value: string;
}

class Field {
    name: string;
    meta: IMeta;
    constructor(name: string, meta: IMeta) {
        this.name = name;
        this.meta = meta;
    }
}
class Meta implements IMeta {
    displayName: string;
    displayType: string;
    value: string;
    constructor(props: IMeta) {
        this.displayName = props.displayName;
        this.displayType = props.displayType;
        this.value = props.value;
    }
}

export default SchemaUtil;
