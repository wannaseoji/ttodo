import OptionsModal from './components/OptionsModal';
import TaskList from './components/TaskList'

function CategoryList() {
    return (
    <>
        <TaskList
        tasks={taskData}
        onOptionsModal={onShowOptionsModal}/>
        <OptionsModal open={modalOpen} close ={closeOptionsModal} header="Options" />
    </>
    )
}

export default CategoryList;