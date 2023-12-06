const selectProfileInfo = (reduxState) => {
    return reduxState.auth.profileInfo;
}

export {selectProfileInfo};