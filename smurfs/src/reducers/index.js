/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import 
{ FETCH_SUCCESS , 
  FETCH_START, 
  FETCH_FAIL,
  ADD_START,
  ADD_SUCCESS,
  // UPDATE_START,
  // UPDATE_SUCCESS
  // DELETE_START,
  // DELETE_SUCCESS
   }
   from '../actions';


 const initialState ={
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
 }

 const reducer = (state = initialState, action) => {
   switch(action.type) {
     case FETCH_START :
       return {
         ...state,
         error: '',
         fetchingSmurfs: true
       }
      case FETCH_SUCCESS: 
       return {
         ...state,
         error: '',
         fetchingSmurfs: false,
         smurfs: action.payload
       }
       case FETCH_FAIL: 
       return {
         ...state,
         error: '',
         fetchingSmurfs: false,
       }
      case ADD_START:
        return {
          ...state,
          error: '',
          addingSmurf: true,
        }
      case ADD_SUCCESS:
        return {
          ...state,
          error: '',
          addingSmurf: false,
          smurfs: action.payload
        }
      // case UPDATE_START:
      //     return {
      //       updatingSmurf: true,
      //       error: ''
      //     }
      // case UPDATE_SUCCESS:
      //     return {
      //       updatingSmurf: false,
      //       error: '',
      //       smurfs: action.payload
           
      //     }
        // case DELETE_START:
        // return {
        //   deletingSmurf: true,
        //   error: ''
        // }
        // case DELETE_SUCCESS:
        //   return {
        //     deletingSmurf: false,
        //     error: '',
        //     smurfs: state.smurfs.filter(smurf => {
        //       if(action.payload === smurf.id) {
        //         return(
                      // ...smurfs
        //         )
        //       }
        //     })
        //   }
       default:
         return state;
   }
 }

 export default reducer; 
