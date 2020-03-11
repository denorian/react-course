let state = {

    post: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Init post", likesCount: 1}
    ],
    dialogData: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Valera"},
        {id: 3, name: "Vlad"},
        {id: 4, name: "Marat"},
        {id: 5, name: "Ignat"}
    ],
    messsageData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Nice!"},
        {id: 5, message: "And you?"},
    ]
};

export let addPost = (newPost) => {
    let post = {
        id: 8,
        message: newPost,
        likesCount: 0
    };

    state.post.push(post);
}

export default state;