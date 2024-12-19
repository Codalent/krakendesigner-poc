export const extractFieldsData = (fields: any, allFields: any) => {
  const extractedFields = [];
  fields.forEach((singleField: any) => {
    allFields[singleField.fieldName] &&
      extractedFields.push({
        ...allFields[singleField.fieldName],
        ...singleField,
      });
  });
  return extractedFields;
};
