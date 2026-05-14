package com.example.muscle_map.exceptions;

public class BadRequestException extends RuntimeException{

    private final String errorCode;

    public BadRequestException(String msg){
        super(msg);
        this.errorCode = "BAD_REQUEST";
    }

    public BadRequestException(String msg, String errorCode){
        super(msg);
        this.errorCode = errorCode;
    }

    public String getErrorCode(){
        return errorCode;
    }
}
