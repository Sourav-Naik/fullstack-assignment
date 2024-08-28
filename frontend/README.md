## 1. How can you implement shared functionality across a component tree?

To share functionality across multiple components in React using the Context API, you follow these steps:

1. **Create a Context:** This is like setting up a shared "bucket" where you can store data or functions that multiple components might need.

2. **Set Up a Provider:** Wrap the part of your app that needs access to this shared data with a special component called a Provider. The Provider makes the data in the context available to all components inside it.

3. **Use the Context in Components:** Inside any component within the Provider, you can access the shared data directly without passing it through props. This is done using a hook called useContext.

This method allows you to share data easily across many components without having to pass it down through each one individually.

## 2. Why is the useState hook appropriate for handling state in a complex component?

The useState hook is appropriate for handling state in a complex component because it provides a straightforward way to manage and update the component's state.

Here’s why it’s suitable:

1. **Encapsulation:** Each useState hook manages its own piece of state. This means you can keep different pieces of state separate and organized, making it easier to understand and manage complex state.

2. **Simplicity:** useState is simple to use and doesn’t require a lot of boilerplate code. It provides a way to define state and update it in a concise manner.

3. **Direct Updates:** It allows you to directly update the state with a function, making it easy to handle changes and re-render the component automatically when the state changes.

4. **Local Scope:** State managed by useState is local to the component where it’s used, which helps to avoid unintended side effects from other parts of the application.

In short, useState is effective for complex components because it keeps state management straightforward, localized, and easy to work with, while avoiding the overhead of more complex state management solutions.
