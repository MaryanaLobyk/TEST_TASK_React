import React, {Component} from 'react';
import TreeView from "react-treeview";

class File extends Component {

    render() {
        const {data} = this.props
        return (
            <div className="container">
                <TreeView key={data.name} nodeLabel={data.name} defaultCollapsed={true}>
                    <div>type: {data.type}</div>
                    {Array.isArray(data.children) ? data.children.map(child => {
                        return (
                            child.mime ? <TreeView key={child.name} nodeLabel={child.name} defaultCollapsed={true}>
                                <div>mime: {child.mime}</div>
                                <div>type: {child.type}</div>
                            </TreeView> : <TreeView key={child.name} nodeLabel={child.name} defaultCollapsed={true}>
                                    <div>type: {child.type}</div>
                                </TreeView>
                        )
                    }) : ''}
                </TreeView>
                </div>
        );
    }
}

export default File;
