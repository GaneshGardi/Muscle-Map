package com.example.muscle_map.exceptions;

public class ResourceNotFoundException extends RuntimeException{


    private final String errorCode;

    public ResourceNotFoundException(String msg){
        super(msg);
        this.errorCode = "NOT_FOUND";
    }

    public ResourceNotFoundException(String msg, String errorCode){
        super(msg);
        this.errorCode = errorCode;
    }

    public String getErrorCode(){
        return errorCode;
    }
}
