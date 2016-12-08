CREATE SCHEMA IF NOT EXISTS `tevinafoa` DEFAULT CHARACTER SET utf8 ;
USE `tevinafoa` ;

-- -----------------------------------------------------
-- Table `tevinafoa`.`flagras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tevinafoa`.`flagras` (
  `idflagras` INT NOT NULL AUTO_INCREMENT,
  `foto` VARCHAR(100) NOT NULL,
  `descricao` VARCHAR(450) NOT NULL,
  `status` VARCHAR(45) NULL,
  `data` DATE NULL,
  PRIMARY KEY (`idflagras`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tevinafoa`.`comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tevinafoa`.`comentarios` (
  `idcomentarios` INT NOT NULL,
  `comentario` VARBINARY(455) NOT NULL,
  `flagras_idflagras` INT NOT NULL,
  PRIMARY KEY (`idcomentarios`, `flagras_idflagras`),
  INDEX `fk_comentarios_flagras_idx` (`flagras_idflagras` ASC),
  CONSTRAINT `fk_comentarios_flagras`
    FOREIGN KEY (`flagras_idflagras`)
    REFERENCES `tevinafoa`.`flagras` (`idflagras`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;