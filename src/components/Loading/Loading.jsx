
import { createPortal } from 'react-dom'
import styles,{shape, shape1, shape2,shape3,shape4} from './Loading.module.scss'
const shapes=[shape1, shape2,shape3,shape4]

const Loading = ({text = 'Loading...'}) => createPortal(
    <div className={styles.loadingWrapper}>
    <div className={styles.containerSpinner}>
      {shapes.map((item) => <div className={`${shape} ${item}`} key={item} />)}
     </div>
      <div className={styles.progressCircleText} data-loading-text={text}></div>
    </div>,
    document.body
  )


export default Loading
