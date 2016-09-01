import React from 'react';
import classNames from 'classnames';

class Stages extends React.Component {
	
	getStagesInProgress(){
		return this.props.data.stages.filter((stage) => stage.status=="InProgress");
	}

	generateMainStageName(){
		var mainStageName = "";
		var stagesInProgress = this.getStagesInProgress();
		if(stagesInProgress.length == 1){
			mainStageName = stagesInProgress[0].name;
		}else{
			mainStageName = stagesInProgress.length + " stages";
		}
		return mainStageName;
	}


	render() {
		var mainStageName = this.generateMainStageName();
		var stages = this.props.data.stages.map((stage) => {
			var stageClass = classNames('stage', stage.code);
			return <div key={stage.code} title={stage.name} className={stageClass}></div>;
		});
		return (
			<div className='stages'>
				<div>{mainStageName}</div>
				<div>
					{stages}
				</div>
			</div>
		);
	}
}
export default Stages;