<?php
// namespace App\User;

require_once "db_connection.php";


class User extends Connection
{

    protected $id;
    protected $name;
    protected $username;
    protected $password;
    protected $condition; 
    protected $updated_at;
    protected $deleted_at;

    public function getId(){
        return $this->id;
    }
    public function getName(){
        return $this->name;
    }
    public function getUsername(){
        return $this->username;
    }
    private function getPassword(){
        return $this->password;
    }
    public function getCondition(){
        return $this->condition;;
    }
    public function getUpdated(){
        return $this->updated_at;
    }
    public function getDeleted(){
        return $this->deleted_at;
    }

    public function setId($input){
        $this->id = $input;
    }
    public function setName($input){
        $this->name = $input;
    }
    public function setUsername($input){
        $this->username = $input;
    }
    public function setPassword($input){
        $this->password = base64_encode($input);
    }
    public function setCondition($input){
        $this->condition = $input;
    }
    public function setUpdated($input){
        $this->updated_at = $input;
    }
    public function setDeleted($input){
        $this->deleted_at = $input;
    }

    public function load($user_id = 0){
        $id = ($user_id > 0) ? $user_id : $this->getId();

        if($id > 0){

            $query = "SELECT * FROM users WHERE id = $id";
            $db_request = new Connection($query);
            $user = $db_request->getObjectData()[0];
            $this->setId($user->id);
            $this->setName($user->user_name);
            $this->setUsername($user->user_username);
            $this->setCondition($user->user_condition);
            $this->setDeleted($user->deleted_at);
            $this->setUpdated($user->updated_at);
        }else{
            return false;
        }
    }

    public function update(){
        
    }
    
    public function delete(){
        $id = $this->getId();
        $date = date('Y-m-d H:i:s');
        $query = "UPDATE TABLE users SET deleted_at = '$date' WHERE id = $id";
        
        $db_request = new Connection($query);
        return $db_request->getData();

    }

    public function save(){
        $name = $this->getName();
        $username = $this->getUsername();
        $password = $this->getPassword();
        $condition = $this->getCondition();
        
        $query = "INSERT INTO users(user_name, user_username, user_password, user_condition) values('$name', '$username', '$password', $condition)";
        $db_request = new Connection($query);
        return $db_request->getData();
    }

    public function edit(){
        $id = $this->getId();
        $name = $this->getName();
        $username = $this->getUsername();
        $condition = $this->getCondition();
        $this->setUpdated(date('Y-m-d H:i:s'));

        $update_query = "UPDATE users SET user_name = '$name', user_username = '$username', user_condition = $condition, updated_at = '{$this->getUpdated()}'  WHERE id = $id";
        $db_request = new Connection($update_query);
        return $db_request->getData();
    }
}
// $user = new User();
// $user->load(1);
//  echo "<pre>";  print_r($user); echo "</pre>";
?>