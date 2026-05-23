import { supabase } from "../supabaseClient";

// GET EMPLOYEES
export const getEmployees = async () => {

  const { data, error } =
    await supabase
      .from("employees")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

  if (error) {

    throw error;

  }

  return data;
};

// CREATE EMPLOYEE
export const createEmployee =
  async (employeeData) => {

    const { data, error } =
      await supabase
        .from("employees")
        .insert([employeeData])
        .select();

    if (error) {

      throw error;

    }

    return data;
  };

// UPDATE EMPLOYEE
export const updateEmployee =
  async (id, updatedData) => {

    const { data, error } =
      await supabase
        .from("employees")
        .update(updatedData)
        .eq("id", id)
        .select();

    if (error) {

      throw error;

    }

    return data;
  };

// DELETE EMPLOYEE
export const deleteEmployee =
  async (id) => {

    const { error } =
      await supabase
        .from("employees")
        .delete()
        .eq("id", id);

    if (error) {

      throw error;

    }

    return true;
  };