const user = {
  state: {
    name: '张波',
    age: 27
  },
  getters: {
    nameSet: state => {
      return state.name + 'super';
    },
    ageSet: state => {
      return state.age + 'years old'
    }
  },
  mutations: {
    increaseAge(state, age) {
      state.age += age;
    }
  },
  actions: {
    
  }
}