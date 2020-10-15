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
    private $deleted_at = NULL;

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
    public function getDeleted()
    {
        return $this->deleted_at;
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
    public function setDeleted($input)
    {
        $this->deleted_at = $input;
    }

    public function load($id = 0){
        $h_id = ($id > 0) ? $id : $this->getId();
        $request_query = "SELECT h.*, s.title as subject_title FROM homeworks h join subjects s on(h.subject_ = s.id) WHERE h.id = $h_id";
        $this->executeQuery($request_query);

        if($this->getConnection()->affected_rows > 0)
        {
            $this->setId($this->getObjectData()[0]->id);
            $this->setTitle($this->getObjectData()[0]->title);
            $this->setSubject($this->getObjectData()[0]->subject_);
            $this->setDeliverTime($this->getObjectData()[0]->deliver_time);
            $this->setCondition($this->getObjectData()[0]->condition_);
            $this->setDetails($this->getObjectData()[0]->details);
        }
        else{
            return false;
        }
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
    public function update($action="", $input=""){
        $id = $this->getId();
        if($action != "")
        {
            switch($action)
            {
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
        }else 
        {
        $update_query = "UPDATE homeworks SET title = '{$this->getTitle()}', subject_ = {$this->getSubject()}, deliver_time = '{$this->getDeliverTime()}', condition_ = {$this->getCondition()}, details =  '{$this->getDetails()}', deleted_at = '{$this->getDeleted()}' WHERE id= {$this->getId()}";
            $this->executeQuery($update_query);
            return $this->getConnection()->affected_rows;
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
        $query = "UPDATE subjects SET title='$title' WHERE id=$id";
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
// $homework = new Homework();
// $homework->load(4);
//  echo "<pre>";  print_r($homework->getConnection()); echo "</pre>";
//  echo "<pre>";  print_r($homework); echo "</pre>";
?>