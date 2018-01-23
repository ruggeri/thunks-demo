**React-Redux and Connecting React Components to the Redux world**

1. Your Root component is the top of your application.
2. The Root wraps your App component with the react-redux Provider
   component.
    1. The Provider component will magically let connected components
       use the store.
3. The App component uses your application components to build the page.
4. There are two main ways for a component to get props:
    1. It receives props in the JSX: <CatsList cats={listOfAllCats} />
    2. Or, it is a *connected* component. Connected components are
       called containers.
5. A CatsListContainer is the bridge between the redux world and the
   React world.
    1. CatsListContainer can get data from the store, and it can
       dispatch actions to the store. No one else can directly do
       this.
    2. You create CatsListContainer via connect(mapStateToProps,
       mapDispatchToProps)(CatsList).
    3. connect returns the new container.
6. mapStateToProps is the way Redux store state gets into the React
   components.
    1. When connect defines CatsListContainer, it gives the container
       mapStateToProps.
    2. The container also has direct access to the store:
       `catsListContainer.context.store.`
    3. The container uses mapStateToProps to produce the properties to
       pass to the wrapped CatsList class.
    4. mapStateToProps will return an object with the format {
       [propertyName]: propertyValue }.
    5. For instance, you might return an object like this: { cats:
       selectors.allCats(state) }.
    6. Notice how selectors uses the state to pull out the cats from
       the store.
    7. There will now be a ‘cats’ property passed by the
       CatsListContainer into the wrapped CatsList.
    8. When CatsListContainer renders, it basically does something
       like `<CatsList {…mapStateToProps(store)} />`. The
       `{…properties}` is splatting the object: the key value pairs
       become properties and property values for CatsList.
7. mapDispatchToProps is the way React components can tell the store
   to update
    1. Very similar to mapStateToProps. connect gives
       CatsListContainer mapDispatchToProps
    2. The container has direct access to the dispatch function:
       `catsListContainer.context.store.dispatch`.
    3. The wrapped component CatsList wants to be able to send actions
       like `receiveCat(submittedFormCatObject)`.
    4. To let this happen, mapStateToProps is a function that takes in
       `dispatch`, and produces an object of key value pairs, as
       before.
    5. These become properties of the CatsList as before.
    6. The only difference is the *values*. These are functions. A
       function like `receiveCat` will use the dispatch function from
       `mapDispatchToProps`.
    7. `receiveCats(submittedFormCatObject)` will be defined as
       `dispatch(cat_actions.receiveCats(submittedFormCatObject))`.
    8. The receiveCats property thus (1) produces the action, and (2)
       gives the action to dispatch.
8. Nowhere else in the React world will anyone access the store, or
   use the dispatch function. Only in mapStateToProps and
   mapDispatchToProps for a container component. These are the bridge
   between the worlds.
