<?php
// namespace App\Homework
require_once "db_connection.php";

class Homework extends Connection{
    
    private $id;
    private $title;
    private $subject;
    private $deliver_time;
    private $condition;
    private $details;

    public function getTitle(){
        return $this->title;
    }
    public function getSubject(){
        return $this->subject;
    }
    public function getDeliverTime(){
        return $this->deliver_time;
    }
    public function getCondition(){
        return $this->condition;
    }
    public function getDetails(){
        return $this->details;
    }
    public function getId(){
        return $this->id;
    }

    public function setTitle($input){
        $this->title = $input;
    }
    public function setSubject($input){
        $this->subject = $input;
    }
    public function setDeliverTime($input){
        $this->deliver_time = $input;
    }
    public function setCondition($input){
        $this->condition = $input;
    }
    public function setDetails($input){
        $this->details = $input;
    }
    public function setId($input){
        $this->id = $input;
    }

    
    public function save(){
        $title = $this->getTitle();
        $subject = $this->getSubject();
        $deliver_time = $this->getDeliverTime();
        $condition = $this->getCondition();
        $details = $this->getDetails();
        
        $query = new Connection("insert into homeworks(title, subject_, deliver_time, condition_, details) values ('$title',$subject,'$deliver_time',$condition,'$details')");

        return $query;
    }
    public function update($action, $input=""){
        $id = $this->getId();
        switch($action){
            case 'setDone':
                $q = new Connection("UPDATE homeworks SET condition_ = 3 WHERE id = $id");
                echo json_encode($q->getData());
            break;
            case 'setUndone':
                $q = new Connection("UPDATE homeworks SET condition_ = 0 WHERE id = $id");
                echo json_encode($q->getData());
            break;
            case 'delete':
                $q = new Connection("DELETE FROM homeworks WHERE id = $id");
                echo json_encode($q->getData());
            break;
        }
    }
    // public function delete(){}
}

class Subject extends Connection{
    private $id;
    private $title;

    public function getTitle(){
        return $this->title;
    }

    public function getId(){
        return $this->id;
    }

    public function setTitle($input){
        $this->title = $input;
    }

    public function save($input){
        $query = "insert into subjects(title) values('$input')";
        $connection = new Connection($query);
        return $query->getData();
    }
    public function update(){
        $id = $this->getId();
        $title = $this->getTitle();
        $query = "UPDATE TABLE subjects SET title='$title' WHERE id=$id";
        $connection = new Connection($query);
    }
    public function delete(){
        $id = $this->getId();
        $date = date('Y-m-d H:i:s');
        $query = "UPDATE TABLE subjects SET deleted_at = '$date' WHERE id = $id";
        $connection = new Connection($query);
        return $connection->getData();
    }
}
?>