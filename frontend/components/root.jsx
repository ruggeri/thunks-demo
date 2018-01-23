import * as React from 'react';
import { Provider } from 'react-redux';
import { App } from './app.jsx';

// class Root extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     const { store } = this.props;
//
//     return (
//       <div>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </div>
//     );
//   }
// }

export const Root = ({ store }) => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
