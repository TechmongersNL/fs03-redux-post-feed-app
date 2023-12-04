// Regular selector
const selectAllPosts = (reduxState) => {
    return reduxState.feed.allPosts;
}

// Parameterized selector
// You can pass as many arguments as you want here
const selectPostById = (id, someOtherString, someArray) => (reduxState) => {
    const foundPost = reduxState.feed.allPosts.find((post) => {
        return post.id === id
    })

    return foundPost;
}

export {selectAllPosts, selectPostById};