import React from "react";
import { Formik, Field, FieldArray } from "formik";

const CityForm = () => {
  const initialValues = {
    cities: [
      { name: "", population: "", area: "", elevation: "" },
      { name: "", population: "", area: "", elevation: "" },
      { name: "", population: "", area: "", elevation: "" },
      { name: "", population: "", area: "", elevation: "" },
    ],
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="city-form">
      <h1>Cities in Nepal</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit(values);
            }}
          >
            <FieldArray name="cities">
              {({ push, remove }) => (
                <div>
                  {values.cities.map((city, index) => (
                    <div key={index}>
                      <Field
                        name={`cities.${index}.name`}
                        placeholder="Name"
                        type="text"
                      />
                      <Field
                        name={`cities.${index}.population`}
                        placeholder="Population"
                        type="text"
                      />
                      <Field
                        name={`cities.${index}.area`}
                        placeholder="Area"
                        type="text"
                      />
                      <Field
                        name={`cities.${index}.elevation`}
                        placeholder="Elevation"
                        type="text"
                      />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      push({
                        name: "",
                        population: "",
                        area: "",
                        elevation: "",
                      })
                    }
                  >
                    Add City
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CityForm;
