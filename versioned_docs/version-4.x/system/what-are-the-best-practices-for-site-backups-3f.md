<!-- Filename: What_are_the_best_practices_for_site_backups%3F / Display title: What are the best practices for site backups? -->

<img
src="https://docs.joomla.org/images/thumb/7/7f/Merge-icon.png/25px-Merge-icon.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/7/7f/Merge-icon.png/38px-Merge-icon.png 1.5x, https://docs.joomla.org/images/thumb/7/7f/Merge-icon.png/50px-Merge-icon.png 2x"
data-file-width="200" data-file-height="80" width="25" height="10"
alt="Merge-icon.png" />Merge Notice

It has been suggested that this article or section be merged with
*[Backup Basics for a Joomla! Web
Site](https://docs.joomla.org/Backup_Basics_for_a_Joomla!_Web_Site "Backup Basics for a Joomla! Web Site")*.
(<a
href="https://docs.joomla.org/index.php?title=Talk:What_are_the_best_practices_for_site_backups%3F&amp;action=edit&amp;redlink=1"
class="new"
title="Talk:What are the best practices for site backups? (page does not exist)">Discuss</a>).
<span class="small">*Proposed since **2 months ago***.</span>

## Backup Types

There are three traditional backup types: full, cumulative and
differential.

### Full Backups

A complete backup of all associated files at a known point in time.

Both of the following types are considered Incremental backups. They can
be used independently or in conjunction with each other but always
relate back to a **full** backup.

### Cumulative or Differential Backups

This is a backup of the differences since the last **full** backup, so
each cumulative backup gets bigger each cycle as it is also backing up
data previously backup, since the last **full** backup.

### Incremental Backups

This is a backup of the changes since the previous backup of any type,
i.e., full, cumulative, or incremental.

## Which Type Should I Choose?

If you site is not too large, then **full** backups are the way to go,
once a week at least. If your content changes quite regularly or more
importantly cannot be recreated or is too costly to recreate, once a
night or more may be more effective.

If time, server resources, or the rate of data change is too high to
successfully obtain a **full** backup every night then the incremental
backups are needed.

If you choose to use a cumulative backup following a weekly full backup,
the backups each night will run quicker than a full backup. However as
the week progresses, each nightly cumulative backup will increase in
size and time, due to not only backing up the changes since last night's
backup, but it also backing up all changes each night and previous
nights since the last full backup was made. The benefit of this type of
backup, in conjunction with full backups is the speed of restoration. To
restore, you now only need to recover the most recent full and
cumulative backups to fully recover all information.

If time or server resources are paramount or data change overwhelms
cumulative backups, turn to incremental backups. This style of backup,
when used in conjunction with a full backup, will provide a similar
level of protection, but restoration will be slower. Incremental backups
will only backup changed data since the last backup of any type, not
since the last full backup, as with a cumulative backup. Thus, when
restoring data, you will need to recover the full backup, then each
incremental backup in turn (oldest first) in order to fully recover all
information. This method also has the drawback of recovering any
legitimately deleted files, potentially "over-filling" the file-system.

## Data Protection Best Practices

1.  You should be able to completely recover from a catastrophic failure
    from at least two previous full backups in case the most recent full
    backup is damaged, lost, or corrupt.
2.  A good backup regime should contain at least one full backup within
    a chosen cycle, normally weekly.
3.  A good backup practice is to store backups away from the current
    data location, preferably off-site.
4.  Dynamic data should be backed up *offline* or *hot* to avoid *fuzzy*
    backups. (Data is changing as you back it up, potentially leading to
    related information not being in sync when backed up.)

For the average website, a daily or weekly full backup of both site
files and database records is normally enough. Keeping a number of
backups for a period of time is always a good plan--maybe keep each
weekly backup for one month. This allows you to recover an old site in
the case of emergencies or if you have local backup file corruption.

There are many PHP and Perl scripts on the web that can be automated
through CRONTAB and can either email (if small enough) or FTP the backup
files to an off- or cross-server location. Remember with Joomla! you
already have an instant backup of the core files. If you haven't
modified core, the Joomla! distribution files can be easily restored.
Then you need only worry about backing up changed files and the
database.
