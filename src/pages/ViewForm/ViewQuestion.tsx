import { QuestionType } from '../../types/Form';
import ViewShortAnswer from './viewquestions/ViewShortAnswer';
import ViewLongAnwer from './viewquestions/ViewLongAnwer';
import ViewMultipleOptionAnswer from './viewquestions/ViewMultipleOptionAnswer';
import ViewSingleOptionAnswer from './viewquestions/ViewSingleOptionAnswer';
import ViewEmailAnswer from './viewquestions/ViewEmailAnswer';

interface QuestionProps {
    question: QuestionType
}

const ViewQuestion: React.FC<QuestionProps> = ({ question }) => {
    switch (question.type) {
        case 'shortAnswer':
            return <ViewShortAnswer question={question} />
        case 'longAnswer':
            return <ViewLongAnwer question={question} />
        case 'singleOption':
            return <ViewSingleOptionAnswer question={question} />
        case 'multipleOption':
            return <ViewMultipleOptionAnswer question={question} />
        case 'email':
            return <ViewEmailAnswer question={question} />
        default:
            return <></>
    }
}

export default ViewQuestion