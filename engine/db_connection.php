<?php
include_once "Credentials.php";
class Connection
{
    // public $database = "database";
    private $connection = true;
    private $data = '';
    
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

    function getObjectData($json = false)
    {
        $source_data = $this->data;
        $array_of_objects = Array();
        
        for($i = 0; $i<count($source_data); $i++)
        {
            $empty_object = new stdClass;
        
            foreach ($source_data[$i] as $index=>$info){
                $empty_object->$index = $info;
            }

            array_push($array_of_objects, $empty_object);
        }
        return ($json) ? json_encode($array_of_objects) : $array_of_objects;
    }

    function executeQuery($sql_query)
    {
        if($sql_query != '')
        { 
            $request = mysqli_query($this->getConnection(), $sql_query);
            if($request != false && !is_bool($request))
            {
                $fillable_array = [];
                while($row = $request->fetch_assoc()){
                    $fillable_array[] = $row;
                }
                $this->setData($fillable_array);
                return true;
            }
            else if(is_bool($request))
            {
                $this->setData($request);
                return $request;
            }
            else
            {
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

    function __construct($sql_query='')
    {
        $mysql_connection = mysqli_connect(HOST, USER, PASSWORD, DB_NAME, PORT); 
        if($mysql_connection->errno)
        {
            $this->setConnection($mysql_connection->err); 
        }
        else
        {
            $this->setConnection($mysql_connection);
            $this->executeQuery($sql_query);
            // if($sql_query != '')
            // { 
                // $request_query = mysqli_query($mysql_connection, $sql_query);
                // if($request_query != false && !is_bool($request_query))
                // {
                    // $fillable_array = [];
// 
                    // while($row = $request_query->fetch_assoc())
                    // {
                        // $fillable_array[] = $row;
                    // }
// 
                    // $this->setData($fillable_array);
                // }
                // else if(is_bool($request_query))
                // {
                    // $this->setData($request_query);
                // }
                // else
                // {
                    // $this->setData(false);
                // }
            // }
            // else
            // {
                // return $mysql_connection;
            // }
        
        }
    }
}
?>