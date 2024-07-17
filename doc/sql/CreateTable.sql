USE safecatkorea;

##
## for application
##
CREATE TABLE user_info (
    id                  INT         NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName            VARCHAR(20) NOT NULL,
    email               VARCHAR(40) NOT NULL,
    password            VARCHAR(40) NOT NULL,
    created_datetime    VARCHAR(12),
    updated_datetime    VARCHAR(12)
)