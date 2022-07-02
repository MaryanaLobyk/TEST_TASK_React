import React, {Component} from 'react';
import TreeView from "react-treeview";
import 'react-treeview/react-treeview.css';

import File from "./File";

// used data from data.json, because didn't find way to get folders and files from disk
import data from "../../data.json";

class Folder extends Component {
    state = {searchField: '', openValue: false, inputValue: ''}

    render() {
        const {searchField} = this.state

        return (
            <div>
                {/*the search works only for parent folder, I think that dfs (Depth first search algorithm) can help here, but I couldn't implement it correct*/}
                <input type="search" placeholder='Search ...' onChange={(e) => this.setState({searchField: e.target.value.trimStart()}) }/>
                {data.filter((value) => {
                    if(searchField === ''){
                        return value;
                    }else if(value.name.toLowerCase().includes(searchField.toLowerCase())){
                        return value;
                    }
                })
                    .map((value, i) => {
                    const folderName = value.name;
                    const label = folderName;
                    return(
                        <TreeView key={folderName} nodeLabel={label} defaultCollapsed={true}>
                            {value.children.map(child => {
                                return(
                                    <File data={child}/>
                                )
                            })}
                        </TreeView>
                    )
                })}
            </div>
        );
    }
}

export default Folder;
