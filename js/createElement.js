const createElement = (string) => {
  let wrapper = document.createElement(`div`);
  wrapper.innerHTML = string;
  return wrapper;
};

export default createElement;
