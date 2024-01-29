import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { cva, type VariantProps } from "class-variance-authority"

interface RecordButtonProps {
    isRecording: boolean;
    onClick: (isRecording:boolean) => void; 
}

const recordingVariants = cva("text-white font-bold py-2 px-4 rounded shadow-md mr-2 rounded-full", {
    variants: {
      variant: {
        stopped:
          "bg-green-500 hover:bg-green-700",
        recording:
          "bg-red-500 hover:bg-red-700",
      }
    }
});

const RecordButton: React.FC<RecordButtonProps> = ({isRecording, onClick}) => { 
    const onButtonClicked = () => {  
        onClick(!isRecording); 
    };
 
    return (
        <div className="flex items-center justify-center">
            <Button 
                className={recordingVariants({ variant: isRecording? "recording": "stopped"})}
                onClick={onButtonClicked} 
            >
                <FontAwesomeIcon size='xs' icon={isRecording? faStop: faPlay} />                
            </Button>
             
        </div>
    );
};

export default RecordButton;
