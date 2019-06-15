Self Study Answers:

1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

A. PropTypes allow us to check a React component to see what kind of prop is being passed to it.  Type checking our data prevents some type based errors which we might need to proofread for later. Setting up Proptype checks precludes the need for for debugging certain things later.

2. Describe a life-cycle event in React?

A. Life-cycle events occur during different stages of a React component's life-cycle. Each life-cycle event has different locations within the cycle that it can occur. componentDidUpdate() only occurs within the Updating Stage and occurs just after React updates Dom and refs. 

3. Explain the details of a Higher Order Component?

A. HOC's are functions that both take components as arguements and return components. They are an intentional side benefit of React's nature and allow the reuse of component logic.

4. What are three different ways to style components in React? Explain some of the benefits of each.

A. 1.)CSS in JS allows you to write your CSS code directly into Javascript. 2.) The 'style' prop allows components to be passed styles as props. 3.) 'className' can be used to link the  'class' property in HTML so that stylesheets still function normally. 
