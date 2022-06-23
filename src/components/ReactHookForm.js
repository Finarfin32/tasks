import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

function TestForm() {
  const { register, watch, handleSubmit } = useForm();
  const watchFields = watch(["Imie", "Haslo", "Email"]);
  const watchAllFields = watch();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {watchFields && (
        <input
          type="text"
          placeholder="Imie"
          {...register("Imie", { required: true, maxLength: 20 })}
        />
      )}
      {watchFields && (
        <input
          type="password"
          placeholder="Haslo"
          {...register("Haslo", { required: true, maxLength: 100 })}
        />
      )}
      {watchFields && (
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      )}

      <input type="submit" />
      <div>
        {watchAllFields.Imie ? (
          <>
            <label>Co wpisałeś:</label>Imie: {watchAllFields.Imie}
          </>
        ) : (
          ""
        )}
      </div>

      <div>
        {watchAllFields.Haslo ? (
          <>
            <label>Co wpisałeś:</label>Haslo: {watchAllFields.Haslo}
          </>
        ) : (
          ""
        )}
      </div>

      <div>
        {watchAllFields.Email ? (
          <>
            <label>Co wpisałeś:</label>Email: {watchAllFields.Email}
          </>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default TestForm;
