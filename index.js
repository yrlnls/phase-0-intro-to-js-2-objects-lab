// Write your solution in this file!
// Initial employee object (for testing purposes)
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  // 1) updateEmployeeWithKeyAndValue(employee, key, value)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Returns a new object with the updated key-value pair
  }
  
  // 2) destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Updates the original employee object
    return employee; // Returns the modified employee object
  }
  
  // 3) deleteFromEmployeeByKey(employee, key)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Creates a clone of the employee object
    delete newEmployee[key]; // Deletes the key from the cloned object
    return newEmployee; // Returns the new object without modifying the original
  }
  
  // 4) destructivelyDeleteFromEmployeeByKey(employee, key)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Deletes the key from the original object
    return employee; // Returns the modified employee object
  }
  
  // Test cases:
  
  // Test updateEmployeeWithKeyAndValue
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 30);
  console.log("Original employee:", employee); // Original object remains unchanged
  console.log("Updated employee:", updatedEmployee); // New object with updated key-value pair
  
  // Test destructivelyUpdateEmployeeWithKeyAndValue
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "position",
    "Manager"
  );
  console.log("Destructively updated employee:", destructivelyUpdatedEmployee); // Original object is updated
  
  // Test deleteFromEmployeeByKey
  const employeeWithoutKey = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without key (non-destructive):", employeeWithoutKey); // New object without the deleted key
  console.log("Original employee:", employee); // Original object remains unchanged
  
  // Test destructivelyDeleteFromEmployeeByKey
  const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(
    employee,
    "name"
  );
  console.log("Destructively deleted employee:", destructivelyDeletedEmployee); // Original object is modified
  