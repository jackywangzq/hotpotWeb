import actionCreator from '../../src/reduce/actionCreator';
// const actionCreator = require('../../src/reduce/actionCreator.js');

console.log(actionCreator)
// test('username', () => {
// //   expect(sum(1, 2)).toBe(3);
// 	    const expectedAction = {
//             type: 'changeUsername',
//             payloads:{
//             username: "赵小琴",
//             }
// 	    }
// 	    expect(actionCreator("赵小琴")).toEqual(expectedAction)
// });

describe('actions', () => {
	  it('should create an action to add a todo', () => {
	    const expectedAction = {
            type: 'changeUsername',
            payloads:{
            username: "赵小琴",
            }
	    }
	    expect(actionCreator("赵小琴")).toEqual(expectedAction)
	  })
	})