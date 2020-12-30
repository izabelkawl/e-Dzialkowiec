
class ForumData extends Component {
  constructor(props) {
    super(props)
    this.state = {
        title: '',
        user: '',
        content: '',
        comment: ''
    }
}

handleChangeInputTitle = async event => {
  const image = event.target.value
  this.setState({ image })
}
handleChangeInputUser = async event => {
    const user = event.target.value
    this.setState({ user })
}
handleChangeInputContent = async event => {
  const content = event.target.value
  this.setState({ content })
}
handleChangeInputComment = async event => {
  const comment = event.target.value
  this.setState({ comment })
}

handleIncludeForum = async () => {
  const { title, user, content, comment } = this.state
  const payload = { title, user, content, comment  }

  await api.insertForum(payload).then(res => {
      window.alert(`Forum inserted successfully`)
      this.setState({
        title: '',
        user: '',
        content: '',
        comment: ''
      })
  })
}
