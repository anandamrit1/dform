import { QuestionType } from '../../types/Form';
import ViewShortAnswer from './viewquestions/ViewShortAnswer';
import ViewLongAnwer from './viewquestions/ViewLongAnwer';
import ViewMultipleOptionAnswer from './viewquestions/ViewMultipleOptionAnswer';
import ViewSingleOptionAnswer from './viewquestions/ViewSingleOptionAnswer';
import ViewEmailAnswer from './viewquestions/ViewEmailAnswer';
import ViewLinkAnswer from './viewquestions/ViewLinkAnswer';
import ViewNumberAnswer from './viewquestions/ViewNumberAnswer';
import ViewDateAnswer from './viewquestions/ViewDateAnswer';
import ViewUploadFileAnswer from './viewquestions/ViewFileUploadAnswer';
import ViewWalletConnect from './viewquestions/ViewWalletConnect';
import ViewTwitter from './viewquestions/ViewTwitter';

interface QuestionProps {
    question: QuestionType
    themeColor: string
}

const ViewQuestion: React.FC<QuestionProps> = ({ question, themeColor }) => {
    switch (question.type) {
        case 'shortAnswer':
            return <ViewShortAnswer question={question} themeColor={themeColor} />
        case 'longAnswer':
            return <ViewLongAnwer question={question} themeColor={themeColor} />
        case 'singleOption':
            return <ViewSingleOptionAnswer question={question} themeColor={themeColor} />
        case 'multipleOption':
            return <ViewMultipleOptionAnswer question={question} themeColor={themeColor} />
        case 'email':
            return <ViewEmailAnswer question={question} themeColor={themeColor} />
        case 'link':
            return <ViewLinkAnswer question={question}themeColor={themeColor}  />
        case 'number':
            return <ViewNumberAnswer question={question} themeColor={themeColor} />
        case 'date':
            return <ViewDateAnswer question={question} themeColor={themeColor} />
        case 'upload':
            return <ViewUploadFileAnswer question={question} themeColor={themeColor} />
        case 'walletConnect':
            return <ViewWalletConnect question={question} themeColor={themeColor} />
        case 'twitter':
            return <ViewTwitter question={question} themeColor={themeColor} />
        default:
            return <></>
    }
}

export default ViewQuestion