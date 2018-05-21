class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.outerCircleOptions = {
      color: '#4ca89a',
			radius: 52,
			lineWidth: 7
    }

    this.innerCircleOptions = {
      color: '#96d6f4',
			radius: 45,
			lineWidth: 7
		}
	}

  componentDidMount() {
		this.drawProgressBar(this.props.completed, this.props.total);
	}
	
  componentWillReceiveProps(newProps) {
    this.drawProgressBar(newProps.completed, newProps.total);
  }

  drawProgressBar(completed, total) {
    const canvas = document.getElementById('progressCanvas');
		const ctx = canvas.getContext('2d');
		// что-то слетело, проверить размеры канвы
    canvas.width = 150;
		canvas.height = 100;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

    const canvasX = canvas.width / 2;
		const canvasY = canvas.height / 2;
		ctx.lineWidth = this.outerCircleOptions.lineWidth;
	
		ctx.beginPath();
    ctx.strokeStyle = this.outerCircleOptions.color;
    ctx.arc(canvasX, canvasY, this.outerCircleOptions.radius - 7, 0, 2 * Math.PI);
    ctx.stroke();
		
		ctx.beginPath();
    ctx.strokeStyle = this.innerCircleOptions.color;
    ctx.arc(canvasX, canvasY, this.innerCircleOptions.radius - 7, 0, 2 * Math.PI * (completed/total));
    ctx.stroke();

    ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.font = '18px sans-serif';
    ctx.beginPath();
		ctx.fillText(`${Math.round((completed/total) * 100)}%`, canvasX, canvasY);
	}
	
  render() {
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }
}