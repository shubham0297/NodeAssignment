import React from 'react';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"
        }
    }
    // handle=()=>{
    //     console.log("No Language")
    // }
    handle=(...language)=>{
        // console.log(language.length);
        if(language.length===1)
        {
            this.setState({url:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"});
            console.log("All");
            this.forceUpdate();
        }
        else
        { 
            // console.log(language[0])
            var new_url = "https://api.github.com/search/repositories?q=language:" +language[0]+"&sort=stars&per_page=30";
            this.setState({url:new_url});
            this.forceUpdate();
            console.log(this.state.url)
        }

    }


    render() {
        return (
            <div >
                <h1>Most popular Repositories on Github</h1>
                <div className="navigation">
                    <button onClick={this.handle} className="btn btn-primary btn-md">All</button>
                    <button onClick={this.handle.bind(this,'Ruby')} className="btn btn-primary btn-md">Ruby</button>
                    <button onClick={this.handle.bind(this,"Java")} className="btn btn-primary btn-md">Java</button>
                    <button onClick={this.handle.bind(this,"JavaScript")} className="btn btn-primary btn-md">JavaScript</button>
                    <button onClick={this.handle.bind(this,"Python")} className="btn btn-primary btn-md">Python</button>
                    <button onClick={this.handle.bind(this,"Cpp")} className="btn btn-primary btn-md">C++</button>
                    <button onClick={this.handle.bind(this,"C")} className="btn btn-primary btn-md">C</button>
                </div>
            </div>
        );
    }
}

export default HomePage;