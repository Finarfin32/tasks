import { Controller, useForm } from "react-hook-form";
import React from "react";
import DatePicker from "react-datepicker";

function HookFormDatePicker() {
  const onSubmit = (data, e) => console.log(data, e);
  const { control, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Wpisz datę: </label>
      <Controller
        control={control}
        name="date-input"
        render={({ field }) => (
          <DatePicker
            placeholderText="Select date"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
      {/* <button type="submit">Wyświetl</button> */}
    </form>
  );
}

export default HookFormDatePicker;
