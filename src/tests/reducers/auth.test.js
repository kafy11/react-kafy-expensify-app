import authReducer from '../../reducers/auth';

test('should set default state',() => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set uid', () => {
    const action = {
        type: 'LOGIN',
        uid: 1
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid: action.uid });
});

test('should clear uid', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 1 }, action);
    expect(state).toEqual({});
});