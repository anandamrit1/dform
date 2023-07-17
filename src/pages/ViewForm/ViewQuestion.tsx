import { FormField } from '../../types/Form';
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
import { useFormikContext } from 'formik';

interface QuestionProps {
    question: FormField
    themeColor: string
}

const ViewQuestion: React.FC<QuestionProps> = ({ question, themeColor }) => {
    switch (question.type) {
        case 'ShortText':
            return <ViewShortAnswer question={question} themeColor={themeColor} />
        case 'LongText':
            return <ViewLongAnwer question={question} themeColor={themeColor} />
        case 'MultipleChoice':
            return <ViewSingleOptionAnswer question={question} themeColor={themeColor} />
        case 'MultipleChoice':
            return <ViewMultipleOptionAnswer question={question} themeColor={themeColor} />
        case 'email':
            return <ViewEmailAnswer question={question} themeColor={themeColor} />
        case 'link':
            return <ViewLinkAnswer question={question}themeColor={themeColor}  />
        case 'Number':
            return <ViewNumberAnswer question={question} themeColor={themeColor} />
        case 'Date':
            return <ViewDateAnswer question={question} themeColor={themeColor} />
        case 'Upload':
            return <ViewUploadFileAnswer question={question} themeColor={themeColor} />
        case 'FlowAddress':
            return <ViewWalletConnect question={question} themeColor={themeColor} />
        case 'TwitterAccount':
            return <ViewTwitter question={question} themeColor={themeColor} />
        default:
            return <></>
    }
}

export default ViewQuestion