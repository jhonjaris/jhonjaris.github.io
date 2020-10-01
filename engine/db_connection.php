<?php
include_once "Credentials.php";
class Connection
{
    // public $database = "database";
    public $connection = true;
    public $data = '';

    function __tostring()
    {
        return "Class for connecting and consulting to DataBase";
    }

    function setConnection($connection)
    {
        $this->connection = $connection;
    }

    function setData($data)
    {
        $this->data = $data;
    }
    
    function getConnection()
    {
        return $this->connection;
    }

    function getData()
    {
        return  $this->data;
    }

    function getObjectData($json = false){
        $source_data = $this->data;
        $array_of_objects = Array();
        
        for($i = 0; $i<count($source_data); $i++){
            $empty_object = new stdClass;
        
            foreach ($source_data[$i] as $index=>$info){
                $empty_object->$index = $info;
            }

            array_push($array_of_objects, $empty_object);
        }

        return ($json) ? json_encode($array_of_objects) : $array_of_objects;
    }
    function executeQuery($sql)
    {
        if($sql != '')
        { 
            $query = mysqli_query($this->getConnection(), $sql);
            if($query != false && !is_bool($query))
            {
                $d = [];
                while($row = $query->fetch_assoc()){
                $d[] = $row;
                }
                
                $this->setData($d);
                // mysqli_close($this->getConnection());
                
                
                return true;
            }
            else if(is_bool($query))
            {
                $this->setData($query);
                // mysqli_close($this->getConnection());
                return $query;
            }
            else
            {
                // mysqli_close($this->getConnection());
                $this->setData(false);
                return false;
            }
        }
        else
        {
            return $this->getConnection();
        }
        
    }
    // This is here for version Issues and it will be eliminated when it means no troubles
    public static function connect()
    {
        $connection = mysqli_connect(HOST,USER, PASSWORD, DB_NAME, PORT);
        return $connection;
    }

    public function nextId($tableName)
    {
        $db = DB_NAME;
        $this->executeQuery("SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = '$db' AND TABLE_NAME = '$tableName'");
        return (!is_bool($this->getData())) ? $this->getData()[0]['AUTO_INCREMENT'] : var_dump($this->getData());
    }
    function __construct($sql='')
    {
        $mysql = mysqli_connect(HOST, USER, PASSWORD, DB_NAME, PORT); 
        if($mysql->errno)
        {
            $this->setConnection($mysql->err); 
        }
        else
        {
            $this->setConnection($mysql);

            if($sql != '')
            { 
                $query = mysqli_query($mysql, $sql);
                if($query != false && !is_bool($query))
                {
                    $d = [];

                    while($row = $query->fetch_assoc())
                    {
                        $d[] = $row;
                    }

                    $this->setData($d);
                }
                else if(is_bool($query))
                {
                    $this->setData($query);
                }
                else
                {
                    $this->setData(false);
                }
            }
            else
            {
                return $mysql;
            }
        
        }
    }
}
?>