const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            follow: true,
            fullName: "Alex",
            status: "I'm a big boss",
            location: {
                country: "Russia",
                city: "Moscow"
            },
        },
        {
            id: 2,
            follow: false,
            fullName: "Misha",
            status: "I'm a small boss",
            location: {
                country: "Russia",
                city: "Krasnodar"
            },
        },
        {
            id: 3,
            follow: false,
            fullName: "Chen",
            status: "I'm a chineese",
            location: {
                country: "China",
                city: "Beijine"
            },
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, follow: true};
                    else
                        return u;
                }),
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, follow: false};
                    else
                        return u;
                }),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ],
            };
        }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;