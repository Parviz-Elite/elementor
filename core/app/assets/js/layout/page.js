import Header from './header';
import Sidebar from './sidebar';
import Content from './content';

export default class Page extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		className: PropTypes.string,
		headerButtons: PropTypes.arrayOf( PropTypes.object ),
		sidebar: PropTypes.object.isRequired,
		content: PropTypes.object.isRequired,
	};

	static defaultProps = {
		className: '',
	};

	render() {
		return (
			<div className={ this.props.className }>
				<div className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-templates-modal">
					<div className="dialog-widget-content dialog-lightbox-widget-content">
						<Header title={ this.props.title } buttons={ this.props.headerButtons } />
						<div className="dialog-message dialog-lightbox-message elementor-app__main">
							<Sidebar>
								{ this.props.sidebar }
							</Sidebar>
							<Content>
								{ this.props.content }
							</Content>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
