var React = require("react"),
    ReactDOM = require("react-dom");
    
var TableRow = React.createClass({
  handleClick: function(){
    this.setState({clicked: !this.state.clicked});
  },
  getInitialState: function(){
    return ({
      clicked: false  
    });
  },
	render: function() {
	  const companyShape = <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M4.75 4.95C5.3 5.59 6.09 6 7 6c.91 0 1.7-.41 2.25-1.05A1.993 1.993 0 0 0 13 4c0-1.11-.89-2-2-2-.41 0-.77.13-1.08.33A3.01 3.01 0 0 0 7 0C5.58 0 4.39 1 4.08 2.33 3.77 2.13 3.41 2 3 2c-1.11 0-2 .89-2 2a1.993 1.993 0 0 0 3.75.95zm5.2-1.52c.2-.38.59-.64 1.05-.64.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2-.65 0-1.17-.53-1.19-1.17.06-.19.11-.39.14-.59zM7 .98c1.11 0 2.02.91 2.02 2.02 0 1.11-.91 2.02-2.02 2.02-1.11 0-2.02-.91-2.02-2.02C4.98 1.89 5.89.98 7 .98zM3 5.2c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.45 0 .84.27 1.05.64.03.2.08.41.14.59C4.17 4.67 3.66 5.2 3 5.2zM13 6H1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM3 13H2v-3H1V7h2v6zm7-2H9V9H8v6H6V9H5v2H4V7h6v4zm3-1h-1v3h-1V7h2v3z"></path></svg>,
	        locationShape = <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>,
	        emailShape = <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>,
	        websiteShape = <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>,
	        githubShape = <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>;
	  const showInfo = this.state.clicked ? 'block' : 'none';
    const showCompany = (this.props.company == null) ? 'none' : 'inherit',
          showWebsite = (this.props.website == null) ? 'none' : 'inherit',
          showLocation = (this.props.location == null) ? 'none' : 'inherit',
          showEmail = (this.props.email == null) ? 'none' : 'inherit',
          showBio = (this.props.bio == null) ? 'none' : 'inherit',
          showRealname = (this.props.realname == null) ? 'none' : 'inherit',
          og = (this.props.og) ? 'og' : null,
          clickedArrow = this.state.clicked ? 'dropdown-carat' : 'dropdown-carat-up';
	  
    return (
      <tr className={og}>
        <td className="name">{this.props.index}. <img className="avatar" src={this.props.avatar}></img> {this.props.name}  <span onClick={this.handleClick} >(More Info)</span>  <span className={clickedArrow}></span>
        <div className="info" style={{display: showInfo}}>
          <p id="realname" style={{display: showRealname}}>{this.props.realname}</p>
          <p id="bio" style={{display: showBio}}>{this.props.bio}</p>
          <p>{githubShape} <a target="_blank" href={this.props.link}>{this.props.link}</a></p>
          <p style={{display: showCompany}}>{companyShape} {this.props.company} </p>
          <p style={{display: showWebsite}}>{websiteShape} <a target="_blank" href={this.props.website}>{this.props.website}</a></p>
          <p style={{display: showLocation}}>{locationShape} {this.props.location} </p>
          <p style={{display: showEmail}}>{emailShape} {this.props.email} </p>  
        </div>
        </td>
        <td>{this.props.repos}</td>
        <td>{this.props.followers}</td>
      </tr>
    );
	}
});


var LeaderBoard = React.createClass({
  
  getInitialState: function(){
    return {
    sortType: this.props.sortType,
    isRepo: false
    };
  },
  handleRepoClick: function(){
    if(this.state.isRepo == false){
      this.props.onSortChange('repos');
      this.setState({isRepo: true});
    }
  },
  handleFollowersClick: function(){
    if(this.state.isRepo == true){
      this.props.onSortChange('followers');
      this.setState({isRepo: false});
    }
  },
	render: function() {
	  var rowNodes = this.props.data.map(function(rowData, index) {
      return (
				<TableRow key={index+1} index={index+1} og={rowData.og} avatar={rowData.avatar} link={rowData.link} name={rowData.name} realname={rowData.realname} company={rowData.company} website={rowData.website} location={rowData.location} email={rowData.email} bio={rowData.bio} repos={rowData.repos} followers={rowData.followers} />
			);
		});

    var repoShape = <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>;
    
    const repoArrowDisplay = this.state.isRepo ? 'inline-block' : 'none';
    const followersArrowDisplay = this.state.isRepo ? 'none' : 'inline-block';
		return (
			<div className="leaderboard">
				<table border="1">
				<thead>
					<tr>
						<th>Name</th>
						<th className="header-sorter" onClick={this.handleRepoClick} >{repoShape} Repositories <span className="dropdown-carat" style={{display: repoArrowDisplay}}></span></th>
						<th className="header-sorter" onClick={this.handleFollowersClick} >Followers <span className="dropdown-carat" style={{display: followersArrowDisplay}}></span></th>
					</tr>
				</thead>
				<tbody>
					{rowNodes}
				</tbody>
				</table>
			</div>
		);
	}
});

var UserSearch = React.createClass({
  getInitialState: function(){
    return {
      userName: this.props.userName,
      sortType: this.props.sortType,
      fontSize: 16
    };
  },
  handleUserChange: function(e){
    this.setState({userName: e.target.value, sortType: this.props.sortType});
  },
  
  handleSubmit: function(e){
    e.preventDefault();
    
    if (this.props.loggedIn.login == undefined) {
      var alert = document.querySelector('.alert');
      alert.style.fontSize = this.state.fontSize + 2 + 'px';
      (this.state.fontSize > 60) ? null : this.setState({fontSize: this.state.fontSize + 2});
    } else {
      this.props.onUserSubmit(this.state.userName, this.props.sortType, this.props.accessToken);
      this.setState({userName: ''});
    }
  },
  
	render: function() {
	  var isDisabled = (this.props.loggedIn.login == undefined) ? 'disabled' : null,
	      isDisabledStyle = (this.props.loggedIn.login == undefined) ? { cursor: 'not-allowed', backgroundColor: '#eee' } : null,
	      alertStyle = { 
	        display: (this.props.loggedIn.login == undefined) ? 'inherit' : 'none'
	      };
		return (
			<div className="userSearch">
			  <form className="userForm" onSubmit={this.handleSubmit}>
				<h3>Enter GitHub Username: 
				<input
				  id="search" 
          type="text"
          placeholder="Your GitHub Username"
          value={this.state.userName}
          onChange={this.handleUserChange}
          disabled={isDisabled}
          style={isDisabledStyle}
        />
        <input id="submit" type="submit" value="Submit" /></h3>
				</form>
				<p className="alert" style={alertStyle} >Please login to search for your own leaderboards</p>
			</div>
		);
	}
});

var Loading = React.createClass({
  render: function(){
    return (
      <div className="loading-animation" style={{display: this.props.display}}>
        <svg width="140px" height="140px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(0 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(30 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.08333333333333333s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(60 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.16666666666666666s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(90 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.25s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(120 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.3333333333333333s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(150 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.4166666666666667s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(180 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.5s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(210 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.5833333333333334s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(240 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.6666666666666666s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(270 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.75s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(300 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.8333333333333334s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#929292" transform="rotate(330 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.9166666666666666s" repeatCount="indefinite"></animate></rect></svg>
      </div>
    );
  }
});

var Header = React.createClass({
  render: function(){
    var user = this.props.user,
        isLoggedIn = (this.props.accessToken == null) ? 'Login with GitHub' : '',
        username = (user.login == undefined) ? 'not logged in' : user.login,
        avatar = (user.avatar == undefined) ? '' : user.avatar,
        divStyle = {
          display: (user.login == undefined) ? 'none' : 'inherit'
        };
    return (
      <header>
      <h1>GitHub Leaderboards</h1>
      <div className="githubLogin">
        <div style={divStyle}>
          <p><img className='avatar' src={avatar} /> {username}</p>
          <a href="./">Logout</a>
        </div>
        <a href="https://github.com/login/oauth/authorize?client_id=1c060520396ce10ebb53">{isLoggedIn}</a>
      </div>
      </header>
    );
  }
});

var Footer = React.createClass({
  render: function(){
    return (
      <footer>
        <p>Problems, Questions, Concerns? Feel free to create an <a href="https://github.com/baumant/github-leaderboards/issues/new">Issue</a> on GitHub</p>
        <a className="creator" target="_blank "href="https://github.com/baumant/github-leaderboards"><img src="./public/baumant.jpg" /> by baumant</a>
      </footer>
    );
  }
});

var Application = React.createClass({
  
  getParameterByName: function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  checkLogin: function(userName, sortType, accessToken){
    this.setState({loaded: 'inline-block'});
    if(accessToken == null){
      this.setState({loaded: 'none'});
    }else{
      this.loadData(userName, sortType, accessToken);
    }
  },
  loadData: function(userName, sortType, accessToken) {
    this.setState({loaded: 'inline-block'});
    var apiRequest = new XMLHttpRequest(),
        url = '../api/github?user='+userName+'&access_token='+accessToken;
    apiRequest.open('GET', url);
    apiRequest.onreadystatechange = alertContents.bind(this);
    function alertContents() {
      if (apiRequest.readyState === XMLHttpRequest.DONE) {
        if (apiRequest.status === 200) {
          var response = JSON.parse(apiRequest.responseText);
          this.setState({data: response[1]});
          this.setState({loggedInUser: response[0]});
          this.setState({loaded: 'none'});
        } else {
          console.log('There was a problem with the request.');
        }
      }
    }
    apiRequest.send();
  },
  
  sortChange: function(sortChange){
    this.setState({sortType: sortChange});
    this.state.data.sort( function(a, b){
      a = a[sortChange];
      b = b[sortChange];
      if (a > b) { return -1; }
      if (a < b) { return 1; }
      return 0;
    });
  },
  
  getInitialState: function() {
    var initialData = [{"name":"mrdoob","repos":25,"followers":7931,"avatar":"https://avatars.githubusercontent.com/u/97088?v=3","link":"https://github.com/mrdoob","company":null,"website":"http://mrdoob.com","location":"London, England","email":null,"bio":null,"realname":"Mr.doob"},{"name":"ry","repos":7,"followers":5475,"avatar":"https://avatars.githubusercontent.com/u/80?v=3","link":"https://github.com/ry","company":null,"website":"http://tinyclouds.org/","location":null,"email":null,"bio":null,"realname":"ry"},{"name":"hintjens","repos":95,"followers":677,"avatar":"https://avatars.githubusercontent.com/u/307976?v=3","link":"https://github.com/hintjens","company":"iMatix","website":"http://hintjens.com","location":"Brussels","email":"ph@imatix.com","bio":null,"realname":"Pieter Hintjens"},{"name":"jonobr1","repos":19,"followers":511,"avatar":"https://avatars.githubusercontent.com/u/220033?v=3","link":"https://github.com/jonobr1","company":"Vrse, Inc.","website":"http://jonobr1.com","location":"San Francisco, CA","email":null,"bio":null,"realname":"Jono Brandel"},{"name":"edankwan","repos":37,"followers":234,"avatar":"https://avatars.githubusercontent.com/u/989103?v=3","link":"https://github.com/edankwan","company":null,"website":"http://www.edankwan.com/","location":"Bristol UK","email":null,"bio":null,"realname":"Edan Kwan"},{"name":"julescarbon","repos":33,"followers":229,"avatar":"https://avatars.githubusercontent.com/u/984563?v=3","link":"https://github.com/julescarbon","company":null,"website":"http://asdf.us/","location":null,"email":null,"bio":"ゞ(◒ ͜ʖ◓)ゞ","realname":"Jules LaPlace"},{"name":"baumant","og":true,"repos":10,"followers":2,"avatar":"https://avatars.githubusercontent.com/u/8883043?v=3","link":"https://github.com/baumant","company":null,"website":"http://timothybauman.com","location":"Los Angeles","email":"tebauman@gmail.com","bio":"🌝","realname":"Timothy Bauman"},{"name":"ahansrisuk","repos":3,"followers":1,"avatar":"https://avatars.githubusercontent.com/u/13020179?v=3","link":"https://github.com/ahansrisuk","company":null,"website":null,"location":null,"email":null,"bio":null,"realname":null}];
    return {
      userName: 'baumant',
      sortType: 'followers',
      data: initialData,
      loaded: 'inline-block',
      loggedInUser: {},
      access_token: null
    };
  },
  componentWillMount: function(){
    var access_token = this.getParameterByName('access_token');
    this.setState({access_token: access_token});
  },
  componentDidMount: function() {
    this.checkLogin(this.state.userName, this.state.sortType, this.state.access_token);
  },

  render: function() {
    return (
   		<div>
   		  <Header accessToken={this.state.access_token} user={this.state.loggedInUser} />
   			<UserSearch userName="baumant" loggedIn={this.state.loggedInUser} sortType={this.state.sortType} accessToken={this.state.access_token} onUserSubmit={this.loadData} />
   			<LeaderBoard data={this.state.data} sortType={this.state.sortType} onSortChange={this.sortChange} />
   			<Loading display={this.state.loaded}/>
   			<Footer />
    	</div>
    );
  }
});


ReactDOM.render(<Application />, document.getElementById('react-app'))


