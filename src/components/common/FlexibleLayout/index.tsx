import Input from "@/components/common/inputs/input";
import Select from "@/components/common/inputs/select";
const FlexibleLayout = ({ fieldData, value, onChange }: any) => {
  const {
    type,
    title,
    pattern,
    enum: enumArr,
    fieldName,
    fieldLabel,
    fieldDescription,
  } = fieldData;

  const getComponentTypeHandler = () => {
    if (type) {
      return type;
    }
    if (enumArr) {
      return "select";
    }
    return null;
  };

  const generateDataFromEnum = (enumArr: string[]) => {
    return enumArr.map((enumItem) => ({ value: enumItem, label: enumItem }));
  };

  const componentType = getComponentTypeHandler();
  return (
    <>
      {componentType === "string" && (
        <Input
          wrapperClassName="col-span-8"
          label={fieldLabel}
          value={value}
          name={fieldName}
          info={fieldDescription}
          onChange={onChange}
        />
      )}
      {componentType === "select" && (
        <Select
          label={fieldLabel}
          value={value}
          name={fieldName}
          onChange={onChange}
          options={generateDataFromEnum(enumArr)}
          info={fieldDescription}
          wrapperClassName="col-span-2"
        />
      )}
    </>
  );
};

export default FlexibleLayout;
