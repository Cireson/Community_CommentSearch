USE ServiceManagement

DELETE FROM dbo.DataSource
WHERE Id = '9ba2a657-0e70-aee0-4814-7691eb4389a1'

INSERT INTO dbo.DataSource (Id, Title, ConnectionString, Query, DataSourceId)
VALUES ('9ba2a657-0e70-aee0-4814-7691eb4389a1', 'Search Analyst Comments', NULL, '
DECLARE @term nvarchar(25);
SET @term = ''{{searchTerm}}''

SELECT WorkItem.Id_9A505725_E2F2_447F_271B_9B9F4F0D190C as WorkItemId
	,Comment_AECE7B96_331B_498C_2F77_AEA4376EFFF1 as Comment
	,CommentLog.EnteredBy_A14C9A28_2F82_D1F2_BCCD_A4E3745179B5 as EnteredBy
	,CommentLog.IsPrivate_CE9EEEC2_6842_846E_C82B_4E8E63361DA3 as IsPrivate
	,CommentLog.EnteredDate_4E8F8D74_6B59_27B4_325B_60E901FFA4F6 as EnteredDate
	,COUNT(*) OVER() AS Total
FROM MT_System$WorkItem$TroubleTicket$AnalystCommentLog as CommentLog
INNER JOIN Relationship as Rel ON Rel.TargetEntityId = CommentLog.BaseManagedEntityId
INNER JOIN MT_System$WorkItem$Incident as WorkItem ON Rel.SourceEntityId = WorkItem.BaseManagedEntityId
WHERE 
	CommentLog.Comment_AECE7B96_331B_498C_2F77_AEA4376EFFF1 LIKE CONCAT(''%'', @term, ''%'')
	OR CommentLog.EnteredBy_A14C9A28_2F82_D1F2_BCCD_A4E3745179B5 LIKE CONCAT(''%'', @term, ''%'')
	OR WorkItem.Id_9A505725_E2F2_447F_271B_9B9F4F0D190C LIKE CONCAT(''%'', @term, ''%'')

ORDER BY EnteredDate DESC
OFFSET {{skip}} ROWS
FETCH NEXT {{take}} ROWS ONLY', '2');

DELETE FROM dbo.DataSource
WHERE Id = 'cd3141d1-001c-4f95-a3d7-fc5de63cd385'

INSERT INTO dbo.DataSource (Id, Title, ConnectionString, Query, DataSourceId)
VALUES ('cd3141d1-001c-4f95-a3d7-fc5de63cd385', 'Search User Comments', NULL, '
DECLARE @term nvarchar(25);
SET @term = ''{{searchTerm}}''

SELECT WorkItem.Id_9A505725_E2F2_447F_271B_9B9F4F0D190C as WorkItemId
	,Comment_AECE7B96_331B_498C_2F77_AEA4376EFFF1 as Comment
	,CommentLog.EnteredBy_A14C9A28_2F82_D1F2_BCCD_A4E3745179B5 as EnteredBy
	,CommentLog.EnteredDate_4E8F8D74_6B59_27B4_325B_60E901FFA4F6 as EnteredDate
	,COUNT(*) OVER() AS Total
FROM MT_System$WorkItem$TroubleTicket$UserCommentLog as CommentLog
INNER JOIN Relationship as Rel ON Rel.TargetEntityId = CommentLog.BaseManagedEntityId
INNER JOIN MT_System$WorkItem$Incident as WorkItem ON Rel.SourceEntityId = WorkItem.BaseManagedEntityId
WHERE 
	CommentLog.Comment_AECE7B96_331B_498C_2F77_AEA4376EFFF1 LIKE CONCAT(''%'', @term, ''%'')
	OR CommentLog.EnteredBy_A14C9A28_2F82_D1F2_BCCD_A4E3745179B5 LIKE CONCAT(''%'', @term, ''%'')
	OR WorkItem.Id_9A505725_E2F2_447F_271B_9B9F4F0D190C LIKE CONCAT(''%'', @term, ''%'')

ORDER BY EnteredDate DESC
OFFSET {{skip}} ROWS
FETCH NEXT {{take}} ROWS ONLY', '2');
