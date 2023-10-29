import React, {useContext, useRef, useEffect} from 'react'
import styles from './Popup.module.css'

import { PopupContext } from '../../providers/PopupProvider'

import DropDown from '../ui/DropDown/DropDown'
import { GrFormClose } from 'react-icons/gr'
import CancelButton from '../ui/CancelButton/CancelButton'

const Popup = () => {
	const {isOpenPopup, setIsOpenPopup, animeTitle} = useContext(PopupContext)

	return isOpenPopup && (
		<div className={styles.popupWrapper}>

			<div className={styles.popupContent}>
				<div className={styles.contentWrapper}>
					<span style={{color: "white"}}>
						Title: {animeTitle}
					</span>
					<DropDown
						displayText='Status'
						sectionsNames={["Watching", "Rewatching", "Completed", "Skipping"]}
					/>
					<DropDown
						displayText='Rating'
						sectionsNames={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
					/>
				</div>

			</div>

		</div>
	)
}

export default Popup