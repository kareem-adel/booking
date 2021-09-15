export const setBookModalVisible = async (
  { state, effects, actions },
  visible
) => {
  state.bookModal.visible = visible;
  state.bookModal.mode = "booking";
  state.bookModal.checkIn = "";
  state.bookModal.checkOut = "";
};

export const setCheckIn = async ({ state, effects, actions }, checkIn) => {
  state.bookModal.checkIn = checkIn;
};

export const setCheckOut = async ({ state, effects, actions }, checkOut) => {
  state.bookModal.checkOut = checkOut;
};

export const submitBooking = async ({ state, effects, actions }) => {
  state.bookModal.loading = true;
  return effects.api
    .submitBooking(state.user?.email, {
      ...state.details,
      checkIn: state.bookModal.checkIn,
      checkOut: state.bookModal.checkOut,
    })
    .then(
      () => {
        state.bookModal.loading = false;
        state.bookModal.mode = "success";
        actions.getBookings(state.user?.email);
      },
      () => {
        state.bookModal.loading = false;
        state.bookModal.mode = "fail";
      }
    );
};

export const getBookings = async ({ state, effects, actions }) => {
  state.myBookingsLoading = true;
  const retSnapshot = await effects.api.getBookings(state.user?.email);
  var ret = [];
  retSnapshot.forEach((documentSnapshot) => {
    ret.push({ ...documentSnapshot.data() });
  });
  state.myBookings = ret;
  state.myBookingsLoading = false;
};
