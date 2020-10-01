<?php
// include_once "db_connection.php";
include_once "homework.php";
$database_connection = new Homework();
$subject_object = new Subject();
if(isset($_POST) && !empty($_POST)){
    switch($_POST['action']){
        case 'saveSubject':
            $subject_object->title = $_POST['subjectTitle'];
            return $subject_object->save();
        break;

        case 'setDone':
            $database_connection->setId($_POST['id']);
            $database_connection->update('setDone');
        break;

        case 'setUndone':
            $database_connection->setId($_POST['id']);
            $database_connection->update('setUndone');
        break;

        case 'delete':
            $database_connection->setId($_POST['id']);
            $database_connection->update('delete');
        break;
        
        case 'editSubject':
        break;

        case 'deleteSubject':
        break;

        case 'saveHomework':
            $homework = new Homework;
            $homework->setTitle($_POST['title']);
            $homework->setSubject($_POST['subject']);
            $homework->setDeliverTime($_POST['deliver_time']);
            $homework->setCondition($_POST['condition']);
            $homework->setDetails($_POST['details']);
            $homework->save();
        break;

        case 'editHomework':
        break;

        case 'deleteHomework':
        break;
        
        
    }
}
if(isset($_GET)){
    switch(array_key_first($_GET)){
        case 'subjects':
            $query = "select * from subjects";
            // echo json_encode($query->getData());
        break;

        case 'allHomeworks':
            $query= "SELECT h.id, h.title, h.condition_, h.deliver_time, h.details, s.title as subject_ FROM homeworks h JOIN subjects s ON (s.id = h.subject_) ORDER BY h.deliver_time";
            // echo json_encode($query->getData());
        break;

        case 'condition':
            $c = $_GET['condition'];
            $query = "SELECT h.id, h.title, h.condition_, h.deliver_time, h.details, s.title as subject_ FROM homeworks h JOIN subjects s ON (s.id = h.subject_) WHERE h.condition_ = $c ORDER BY h.deliver_time";
        break;   
    }

    $database_connection->executeQuery($query);
    echo json_encode($database_connection->getData());
    
}

?>