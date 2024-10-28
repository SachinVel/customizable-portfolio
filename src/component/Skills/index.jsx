// src/components/Grid.js
import React from 'react';
import styled from 'styled-components';
import styles from './Skills.module.css';
import { Box, Stack, Typography } from '@mui/material';

// Generate random color for each column




const Skills = () => {

    const skill = {
        'Excellent': {
            "Front End": [{
                skillName: "React", imgName: "react.png", width: '40', height: '40'
            },
            {
                skillName: "HTML/CSS", imgName: "html-css.png", width: '50', height: '50'
            }
            ],
            "Back End": [
                {
                    skillName: "Spring Boot", imgName: "spring-boot.png", width: '40', height: '35'
                },
                {
                    skillName: "MySQL", imgName: "mysql.svg", width: '40', height: '35'
                }
            ],
            "Langauges": [
                {
                    skillName: "Java", imgName: "java.png", width: '50', height: '50',
                }, {
                    skillName: "Javascript", imgName: "javascript.png", width: '40', height: '40'
                }
            ],
            "Others" : [
                {
                    skillName: "Figma", imgName: "figma.png", width: '50', height: '35',
                }
            ]
        },
        'Proficient': {
            "Front End": [
                {
                    skillName: "JQuery", imgName: "jquery.png", width: '40', height: '40'
                }
            ],
            "Back End": [
                {
                    skillName: "AWS", imgName: "aws.png", width: '40', height: '40'
                },
                {
                    skillName: "NodeJS", imgName: "nodejs.svg", width: '40', height: '40'
                }
            ],
            "Others" : [
                {
                    skillName: "Junit", imgName: "junit.webp", width: '45', height: '35',
                }
            ]
        },
        'Competent': {
            "Back End": [
                {
                    skillName: "Firebase", imgName: "firebase.png", width: '50', height: '40'
                },
                {
                    skillName: "MongoDB", imgName: "mongodb.svg", width: '40', height: '40'
                }
            ],
            
            "Langauges": [
                {
                    skillName: "python", imgName: "python.png", width: '40', height: '40',
                }
            ]
        },
        'Started Learning': {
            "Back End": [
                {
                    skillName: "PostgreSQL", imgName: "postgresql.png", width: '40', height: '40'
                }
            ],
            "Langauges": [
                {
                    skillName: "R", imgName: "r.png", width: '40', height: '40',
                }
            ],
            "Others" : [
                {
                    skillName: "Cypress", imgName: "cypress.png", width: '40', height: '40',
                }
            ],
            "Front End": [
                {
                    skillName: "Angular", imgName: "angular.png", width: '40', height: '40',
                }
            ],
        }
    }

    const SkillCell = ({ skillName, imgName, imgWidth, imgHeight }) => {
        return (
            <Stack flexDirection="column" alignItems="center" justifyContent="end" className={styles.skillCell}>
                <Box sx={{ height: "40px", padding: "5px" }}>
                    <img src={`/images/${imgName}`} width={`${imgWidth}`} height={`${imgHeight}`} />
                </Box>
                <span >{skillName}</span>
            </Stack>
        )
    }

    const columns = 4;
    const rows = 4;

    const columnHeader = ["Langauges", "Front End", "Back End", "Others"];
    const rowHeader = ['Excellent', 'Proficient', 'Competent', 'Started Learning']

    return (
        <Box className={styles.gridContainer} columns={columns} rows={rows} >
            <Stack flexDirection="row" className={styles.row} justifyContent="center">
                <Box component="div" className={`${styles.rowHeader} ${styles.gridCell}`}></Box>
                {[...Array(columns)].map((_, colIndex) => (
                    <Box component="div" className={`${styles.rowHeader} ${styles.gridCell}`}>
                        {columnHeader[colIndex]}
                    </Box>
                ))}
            </Stack>
            {[...Array(rows)].map((_, rowIndex) => (
                <Stack flexDirection="row" key={`row-${rowIndex}`} className={styles.row} justifyContent="center">
                    <Box component="div" className={`${styles.rowHeader} ${styles.gridCell}`}>{rowHeader[rowIndex]}</Box>
                    {[...Array(columns)].map((_, colIndex) => {
                        let rowName = rowHeader[rowIndex];
                        let colName = columnHeader[colIndex];
                        if (skill[rowName] && skill[rowName][colName]) {
                            let skillArr = skill[rowName][colName];
                            return (
                                <Stack component="div" flexDirection="row" className={styles.gridCell} key={`cell-${colIndex}`} justifyItems="center" alignItems="center">
                                    {skillArr.map((item) => (
                                        <SkillCell skillName={item.skillName} imgName={item.imgName} imgHeight={item.height} imgWidth={item.width} />
                                    ))
                                    }
                                </Stack>
                            );
                        } else {
                            return (
                                <Box component="div" className={styles.gridCell} key={`cell-${colIndex}`}>
                                </Box>
                            );

                        }

                    }
                    )}
                </Stack>
            ))}
        </Box>
    );
};

export default Skills;
